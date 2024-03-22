const express = require('express');
const app = express();     
const cors = require("cors");
const fs = require('fs');
const fileUpload  = require('express-fileupload');
const cookieParser = require('cookie-parser');
const generalConfig = require("./config/general.config");
const AWS = require('aws-sdk');
const aws_config = require("./config/aws.config");
const s3Service = require("./services/aws/s3");
const s3 = new AWS.S3({
  accessKeyId: aws_config.id,
  secretAccessKey: aws_config.secret,
});
var corsOptions = {
  origin: [generalConfig.clientURL, generalConfig.clientURLhttps, generalConfig.localClientURL, generalConfig.add, generalConfig.add3, generalConfig.add2],
  credentials: true
};
app.use(cookieParser());
app.use(fileUpload());
app.use(cors(corsOptions));
//app.options('*', cors(corsOptions));

var path = require('path');
global.appRoot = path.resolve(__dirname);
//app.use(express.static(path.join(__dirname, '/')));

app.use(express.json()); 
app.use(express.urlencoded()); 

 
const schema = "";   
 
require('./routes/auth.routes')(app);
require('./routes/industry.routes')(app); 
require('./routes/appuser.routes')(app);

var bcrypt = require("bcryptjs");
 

const db = require("./models"); 

if(schema == "update"){
  db.sequelize.sync({alter: {drop:false}}).then(() => {
    initial();
    console.log('Update Db');
}); 
};

// set port, listen for requests
const PORT =  8080; 
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}.`);
});



async function initial() {

  var [organizerRole, organizerRoleCreated] = await db.role.findOrCreate({
    where: {
      name: "organizer"
    }    
  });

  var [fellowRole, fellowRoleCreated] = await db.role.findOrCreate({
    where: {
      name: "fellow"
    }    
  });

  var [partnerRole, partnerRoleCreated] = await db.role.findOrCreate({
    where: {
      name: "partner"
    }    
  });

  

  const [adminUser, adminUserCreated] = await db.appuser.findOrCreate({
    where: {
      email: 'john.doe@johndoe.com'
    },
    defaults: {
      password: bcrypt.hashSync('Hack24!', 8),
      name: 'John',
      surname: 'Doe',
      anrede: "Mr.", 
      mobile: '015730123456',
      region: "Europe",
      city: 'Munich',
      deleted: false
    }   
  }); 

  adminUser.setRoles([organizerRole, fellowRole, partnerRole]);


  const industries = require("./models/mockups/industry");
  for(let i=0; i<industries.length; i++){
    const [industry, industryCreated] = await db.industry.findOrCreate({
      where: {
          name: industries[i].name,
      },
      defaults: {
        deleted: false
      }
    });
  }

  const startups = require("./models/mockups/startup");
  for(let i=0; i<startups.length; i++){
    const [startup, startupCreated] = await db.startup.findOrCreate({
      where: {
        name: startups[i].name,
      },
      defaults:{
        description: startups[i].description ,
        motivation: startups[i].motivation ,
        fellowReason: startups[i].fellowReason ,
        status: startups[i].stage ,
        applicationStatus: startups[i].applicationStatus ,
        foundersNumber: startups[i].foundersNumber ,
        foundedYear: startups[i].foundedYear ,
        region: startups[i].region ,
        batch: startups[i].batch ,
        fileNamePitch: startups[i].fileNamePitch , 
        bucketPathPitch: startups[i].bucketPathPitch ,
        typePitch: startups[i].typePitch ,
        deleted: false
      } 
    });

    let inds = await db.industry.findAll()
    let sus = await db.startup.findAll()

    for(let i=0; i<sus.length; i++){
        const random = Math.floor(Math.random() * inds.length);
        await db.startup_industry.findOrCreate(
          {
            where: {startupId: sus[i].id,
            industryId: inds[random].id}
          }
        )
    }


  const appusers = require("./models/mockups/appuser");
  for(let i=0; i<appusers.length; i++){
    const [appuser, appuserCreated] = await db.appuser.findOrCreate({
      where: {
          email: appusers[i].email,
      },
      defaults: {
        password: bcrypt.hashSync('Hack24!', 8),
        name: appusers[i].name,
        surname: appusers[i].surname,
        anrede: appusers[i].anrede,
        birthdate: appusers[i].birthdate,
        mobile: appusers[i].mobile,
        city: appusers[i].city,
        region: "Europe",
        linkedIn: appusers[i].linkedIn,
        european: true,
        university: appusers[i].university,
        subject: appusers[i].subject,
        studyLevel: appusers[i].studyLevel,
        uniStartDate: appusers[i].uniStartDate,
        fileNameMatr: "test.pdf" ,
        bucketPathMatr: "Matriculations/test.pdf",
        typeMatr: "application/pdf",
        fileNameEngl: "test.pdf",
        bucketPathEngl: "englishcert/test.pdf",
        typeEngl: "application/pdf",
        englProf: appusers[i].englProf,
        levelEngl: appusers[i].levelEngl,
        deleted: false
      }
    });
    if(i%3 == 0){
      appuser.setRoles([organizerRole]);
    }
    if(i%3 == 1){
      appuser.setRoles([fellowRole]);
      const random = Math.floor(Math.random() * sus.length);
        await db.appuser_startup.findOrCreate(
          {
            where: {startupId: sus[random].id,
            appuserId: appuser.id}
          }
        )
    }
    if(i%3 == 2){
      appuser.setRoles([partnerRole]);
    }
  }

  

    



  }

  
  
}



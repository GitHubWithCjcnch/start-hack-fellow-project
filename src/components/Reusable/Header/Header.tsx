import { FC } from 'react';
import { Button } from "@/components/ui/button"


const Header: FC = () => {
  return (
    <header className="bg-purple-700 text-white p-4 text-center">
      <h1 className="text-4xl">test</h1>
      <Button variant="outline">Button</Button>
    </header>
  );
}

export default Header;

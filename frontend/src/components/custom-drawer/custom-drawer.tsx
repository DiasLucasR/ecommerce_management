import React from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface CustomDrawerProps {
  buttonTitle: string;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ buttonTitle, children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{buttonTitle}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {children}
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;

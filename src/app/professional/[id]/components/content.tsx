import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Jobs from "./jobs";
import Recommends from "./recommends";

import ContactButton from "./contact-button";

interface Props {
  professional: Professional;
  user: User | null;
}

export default function Content({ professional, user }: Props) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Trabajos</TabsTrigger>
            <TabsTrigger value="password">Recomendaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Jobs />
          </TabsContent>
          <TabsContent value="password">
            <Recommends professionalId={professional.id} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="hidden md:flex w-full pt-10">
        <ContactButton professional={professional} user={user} type="static" />
      </div>
    </div>
  );
}

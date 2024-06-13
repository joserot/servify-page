import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Jobs from "@/app/[location]/[service]/[id]/components/jobs";
import Recommends from "@/app/[location]/[service]/[id]/components/recommends";

interface Props {
  professional: Professional;
}

export default function JobsAndRecommendations({ professional }: Props) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Trabajos</TabsTrigger>
            <TabsTrigger value="password">Recomendaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Jobs professional={professional} />
          </TabsContent>
          <TabsContent value="password">
            <Recommends professionalId={professional.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// import { useSession, signIn } from 'next-auth/react';

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  // const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <p>Loading...</p>;
  // }

  // if (!session) {
  //   signIn(); // Redirect to login page
  //   return null;
  // }

  return (
    <DashboardLayout>
      <div className="w-full h-screen flex flex-col gap-6 justify-center p-6">
        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
<Card className="">

</Card>
        </div>

      </div>
    </DashboardLayout>
  );
}

{/* <h1>Welcome, {session.user?.name}</h1>
<p>Email: {session.user?.email}</p> */}
{/* <p>User ID: {session.user?.id}</p> */ }
// import { useSession, signIn } from 'next-auth/react';

import { DashboardLayout } from "@/components/dashboard-layout";

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
      <div className="w-full h-screen ">

      </div>
    </DashboardLayout>
  );
}

{/* <h1>Welcome, {session.user?.name}</h1>
<p>Email: {session.user?.email}</p> */}
{/* <p>User ID: {session.user?.id}</p> */}
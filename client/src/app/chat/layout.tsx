import Sidebar from '@/component/Chat/Sidebar';
import { getMe } from '@/serverAction/auth';
import { UserSchema } from '@/types/auth';

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  console.log('User in layout:', user);

  return (
    <div className="flex h-screen">
      <Sidebar
        user={user as UserSchema}
        conversations={[]}
      
      />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ChatLayout;

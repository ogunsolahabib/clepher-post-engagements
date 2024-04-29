import Header from "./sections/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <div className="bg-base-200 min-h-screen">
        <Header />
        <main className='p-10'>
            {children}
        </main>
    </div>
}
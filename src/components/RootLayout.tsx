import Header from "./sections/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        {children}
    </>
}
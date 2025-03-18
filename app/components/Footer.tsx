function Footer() {
    return (
        <>
            <footer className="bg-green-300 text-blue">
                <div className="container mx-auto text-center">
                    <p>{new Date().getFullYear()} &copy; CONCESSIONARIA. Todos os Direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;
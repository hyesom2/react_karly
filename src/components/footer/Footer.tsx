import CustomService from "@/components/footer/CustomService";
import About from "@/components/footer/About";
import Authentication from "@/components/footer/Authentication";
import Copyright from "@/components/footer/Copyright";

function Footer() {
  return (
    <footer>
      <div className="flex gap-x-87 w-1050 mx-auto">
        <CustomService />
        <About />
      </div>
      <Authentication />
      <Copyright />
    </footer>
  )
}

export default Footer;
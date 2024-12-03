// import pages components
import Home from "./pages/Home/Home.svelte";
import Projects from "./pages/Projects/Projects.svelte";
import About from "./pages/About/About.svelte";
import Contact from "./pages/Contact/Contact.svelte";
import NotFound from "./pages/NotFound/NotFound.svelte";

export default {
	"/": Home,
	"/projects": Projects,
	"/about": About,
	"/contact": Contact,
	"*": NotFound
}
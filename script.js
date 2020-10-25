const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
navItems = []
for(let i = 1; i <= 5; i++)
	navItems.push(document.getElementById(`nav-${i}`))
function navAnimation(dir1, dir2){
	navItems.forEach((nav, i) => {
		nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`);
	})
}
function toggleNav() {
	menuBars.classList.toggle("change")
	overlay.classList.toggle('overlay-active')
	if(overlay.classList.contains('overlay-active')){
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		navAnimation('out', 'in')
	} else {
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navAnimation('in', 'out')
	}
}
menuBars.addEventListener("click", toggleNav)
navItems.forEach((navItem)=>{
	navItem.addEventListener("click", toggleNav)
})
import { sectionData } from "../../data/sectionData";

export const MENUITEMS = [
  {
    title: "Home",
    type: "link",
    path:"/"
  
  },
  {
    title: "Profile",
    type: "link",
    path:"/page/profile"
  
  },
  {
    title: "Infrastructure",
    type: "link",
    path:"/infrastructure/gallery"
  
  },
  {
    title: "Product Range",
    type: "sub",
    children: sectionData.map(s=>{
      return {
        title:s.title,
        path:s.link,
        type:'link'
      }
    })
  },
  {
    title: "Contact Us",
    type: "link",
    path:"/page/account/contact"
  
  },

 
];
import React from 'react'

// 3i mettre projet dans la function à la place de img, title, tools
// export default function Cardrealisation({img, title, tools}) {
export default function Cardrealisation({projet}) {
  // console log de projet nous permat de voir F12 et noter toutes les varibales
  // console.log(projet);
  // 3j mettre cette ligne ci dessous avec les données du projet 
  const{ title, description, roles, featuredImage} = projet.fields;
  console.log(featuredImage);
  return (
    <div className=" pt-64">
      <div className=" rounded-lg grid justify-items-center relative ">
        <img
          // src={`img/${img}`}
          src={featuredImage.fields.file.url} //3k pour connaitre cette ligne image voir dans console f12 avec le console.log(featuredImage);
          alt={title}
          className="w-[320px] hover:w-[350px]  absolute bottom-0 hover:transition duration-300"
        />
        <div className="bg-white w-[320px] p-2 text-center absolute top-0">
          <h3 className="  text-bluetitle text-xl uppercase font-bold ">
            {title}
          </h3>
          {/* <p className="text-graywriting uppercase font-bold ">{tools}</p> */}
        </div>
      </div>
    </div>
  );
}

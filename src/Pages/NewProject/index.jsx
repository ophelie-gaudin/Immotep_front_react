import React from "react";
import FormsCard from "../../Components/FormsCard";
import Input from "../../Components/Main/Input";
import OrangeButton from "../../Components/Main/OrangeButton";

const NewProject = () => {
  return (
    <div>
      <FormsCard title="Créer un nouveau projet ">
        <Input label="Titre du projet" type="text" name="title" />
        <Input label="Localisation" type="text" name="localization" />
        <Input label="Vos notes" type="text" name="" />
        <div className="flex justify-end mb-8 mt-8 mr-6">
          <OrangeButton>Créer</OrangeButton>
        </div>
      </FormsCard>
    </div>
  );
};

export default NewProject;

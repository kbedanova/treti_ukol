console.log('funguju!');

updateSkill = (skillId, value) => {
    const skill = document.getElementById(skillId);
    const progress = skill.querySelector('.skill__progress');
    const valueDisplay = skill.querySelector('.skill__value');
 
    value = Math.max(0, Math.min(100, value));

    progress.style.width = `${value}%`;
    valueDisplay.textContent = `${value} / 100`;
}

const htmlSkill = Number(prompt("Zadejte jak hodnotíte své dovednosti v oblasti Html. Prosím ohodnoťte své dovednosti na škále 0-100."));
const cssSkill = Number(prompt("Zadejte jak hodnotíte své dovednosti v oblasti CSS. Proísm ohodnoťte své dovednosti na škále 0-100."));
const jsSkill = Number(prompt("Zadejte jak hodnotíte své dovednosti v oblasti JavaScript. Proísm ohodnoťte své dovednosti na škále 0-100."));   

updateSkill('skill1', htmlSkill);
updateSkill('skill2', cssSkill);
updateSkill('skill3', jsSkill);
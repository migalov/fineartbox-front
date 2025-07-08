

function replaceSpacesAfterPrepositions(text) {
    const prepositions = ['в', 'на', 'с', 'к', 'по', 'из', 'от', 'для', 'под']; // Добавьте нужные предлоги
    const conjunctions = ['и', 'да', 'или', 'но']; // Добавьте нужные союзы
    const regex = new RegExp(`(${prepositions.join('|')})\\s+|(${conjunctions.join('|')})\\s+`, 'g');
    
    return text.replace(regex, (match, p1, p2) => {
        return (p1 ? p1 + '\u00A0' : p2 + '\u00A0');
    });
}

export default replaceSpacesAfterPrepositions;
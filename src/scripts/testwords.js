function insertNbspAfterPrepositions(text) {
  const prepositions = [
    'в', 'во', 'и', 'к', 'на', 'не', 'о', 'об', 'от', 'по', 'с', 'у', 'за', 'до', 'из', 'над', 'но', 'для', 'при', 'через', 'без',
    'что', 'как', 'или', 'ли', 'же', 'да', 'то', 'ни', 'бы'
  ];
  const np = prepositions.map( word => ` ${word}`)
  const regex = new RegExp(`(${np.join('|')})\\s+`, 'g');

    return text.replace(regex, (match, p1) => {
        return `${p1}\u00A0`;
    });
}

export default insertNbspAfterPrepositions;
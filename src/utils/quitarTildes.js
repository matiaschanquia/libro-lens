export function quitarTildes(string) {
    const mapaTildes = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ü': 'u',
        'ñ': 'n'
        // Agrega más caracteres si es necesario
    };

    return string.replace(/[áéíóúüñ]/g, (letraConTilde) => mapaTildes[letraConTilde] || letraConTilde);
}
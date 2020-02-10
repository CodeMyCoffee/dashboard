function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return 0;

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
}

const styles = {
    "LightBlue": "#C6ECFF",
    "Azure": "#12A5ED", // Primary blue color (P2P)
    "PeacockBlue": "#005D9F",
    "Twilight": "#0A3758", // Background color
    "TwilightLight": "#506A84",
    "LightGreen": "#C9EDD9",
    "Green": "#3FCB7E", // Primay green (Efficiency)
    "Viridian": "#1D874D",
    "LightYellow": "#FCE4A3",
    "Sunflower": "#FFBF10",
    "BurntYellow": "#DDA02A", // Primary yellow color (Audience),
    "LightPink": "#FFE0E9",
    "HotPink": "#C42151", // Primary red color (CDN)
    "Rouge": "#9A193E",
    "Velvet": "#570D22",
    "White": "white",
    "OffWhite": "#F5F8FA",
    "LightGray": "#E1E8ED",
    "Gray": "#A1AEB8",
    "Black": "#333",
}


export {
    formatBytes,
    styles
}
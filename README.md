## 📚 I Ching and Astrology library
A Deno TypeScript library for calculating hexagrams and lines using the I Ching and Astrology.

This library can be used in a variety of contexts, including:

- I Ching divination
- Astrological chart interpretation
- Gene Keys and Human Design systems

## 📦 Installation
This library is available on the Deno Third Party Modules repository. You can install it using the following command:

```
deno install --allow-net --allow-read --allow-write -n iching_and_astrology https://deno.land/x/i_ching_astrology/mod.ts
```

## 🚀 Getting Started
The library consists of several functions that can be used to determine hexagrams and line numbers based on degree measurements, as well as to map astrological signs and degrees to hexagrams and line numbers.

### 1. Measurements
The *convertToDecimal* function provided by this library can be used to convert degree measurements in the format of degrees, minutes, and seconds to decimal degrees. Once the angles are converted to decimal degrees, they can be used to calculate line numbers and other information related to hexagrams and signs.

### 2. Hexagram Lines
The *getLineNumber* function takes in the start and end angles of a line segment, as well as a specific angle within that segment, and returns the corresponding line number (1 through 6).

### 3. I-Ching Hexagrams
The *getHexagramLine* function is used to determine the hexagram and line numbers based on an angle and a set of hexagram start angles. This function is utilized in the signPositionToHexagramLine function.

### 4. Astrology Signs
The *signPositionToHexagramLine* function is used to determine the hexagram and line numbers for a given sign and position. This function utilizes the getHexagramLine function and a set of hexagram start angles to determine the corresponding hexagram and line numbers.

The library builds up from degree measurements to line numbers, to hexagram numbers and finally to sign positions, providing a way to map a specific angle to a corresponding hexagram and line number based on a given sign position.

## 🤝 Contributing
Contributions, issues and feature requests are welcome! Feel free to check the issues page for open issues. You can also submit PRs directly.

## 📝 License
This project is licensed under the MIT License.
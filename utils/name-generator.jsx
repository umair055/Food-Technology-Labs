// Mock data for name generation
const prefixes = [
  "Tasty",
  "Delicious",
  "Savory",
  "Gourmet",
  "Fresh",
  "Sizzling",
  "Crispy",
  "Spicy",
  "Sweet",
  "Smoky",
  "Urban",
  "Street",
  "Rolling",
  "Wandering",
  "Fusion",
];

const suffixes = [
  "Wheels",
  "Bites",
  "Eats",
  "Kitchen",
  "Grill",
  "Truck",
  "Cart",
  "Express",
  "Feast",
  "Flavors",
  "Delights",
  "Junction",
  "Station",
  "Hub",
  "Corner",
];

export function generateFoodTruckNames(options) {
  const {
    concept,
    nameStyle,
    nameCount,
    advancedOptions,
    alliteration,
    wordLength,
  } = options;

  const newNames = [];
  const conceptWords = concept.toLowerCase().split(" ");
  const mainConcept = conceptWords[0];

  for (let i = 0; i < nameCount; i++) {
    let name = "";

    // Different name generation strategies based on style
    switch (nameStyle) {
      case "creative":
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

        // Apply alliteration if selected
        if (alliteration && advancedOptions) {
          const conceptFirstLetter = mainConcept.charAt(0);
          const filteredPrefixes = prefixes.filter(
            (p) => p.toLowerCase().charAt(0) === conceptFirstLetter
          );

          if (filteredPrefixes.length > 0) {
            name = `${
              filteredPrefixes[
                Math.floor(Math.random() * filteredPrefixes.length)
              ]
            } ${
              mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
            } ${suffix}`;
          } else {
            name = `${prefix} ${
              mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
            } ${suffix}`;
          }
        } else {
          name = `${prefix} ${
            mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
          } ${suffix}`;
        }
        break;

      case "professional":
        name = `${
          mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
        } Gourmet Truck`;
        break;

      case "fun":
        name = `The ${
          mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
        } Express`;
        break;

      case "quirky":
        name = `Crazy ${
          mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
        } Truck`;
        break;

      default:
        name = `${prefix} ${
          mainConcept.charAt(0).toUpperCase() + mainConcept.slice(1)
        } ${suffix}`;
    }

    // Apply word length filter if advanced options are enabled
    if (advancedOptions) {
      const nameLength = name.length;
      if (nameLength >= wordLength[0] && nameLength <= wordLength[1]) {
        newNames.push(name);
      } else {
        // If name doesn't meet length criteria, generate another one
        i--;
        continue;
      }
    } else {
      newNames.push(name);
    }
  }

  return newNames;
}

import Animal from "./Animal";

export default function Animals() {
  const animals = [
    { name: "Tiger", country: "Bangladesh", height: 4, in_zoo: true },
    { name: "Lion", country: "Africa", height: 3, in_zoo: true },
    { name: "Elephant", country: "India", height: 7, in_zoo: true },
    { name: "Horse", country: "Austria", height: 5.5, in_zoo: false },
  ];
  return (
    <div>
      <ul>
        {animals.map((animal) => (
          <Animal
            name={animal.name}
            country={animal.country}
            height={animal.height}
            in_zoo={animal.in_zoo}
          />
        ))}
      </ul>
    </div>
  );
}

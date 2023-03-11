//Colcar cuantas veces se repitio cada una de las palabras de un texto

List<string> list = Console.ReadLine().ToLower().Split(" ").ToList();

list.Sort();

int count = 1;

for (int i = 0; i < list.Count - 1; i++)
{
    if (list[i] == list[i + 1]) count++;

    else
    {
        Console.WriteLine($"{list[i]} = {count}");
        count = 1;
    }
}


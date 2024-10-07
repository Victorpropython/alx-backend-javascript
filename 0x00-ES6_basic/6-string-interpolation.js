export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
        income: '$119,868',
        gdp: '$154.2 billion',
        capital: '4178.479',
    };
    return `As of ${year}, it was the seventh highest income county in the United States,
             With a per capita personal income of ${budget.income}. As of 2015, Sanfrancisco
            Proper had a GDP of ${budget.gdp}, and a GDp per capital of ${budget.capita}.`;
}
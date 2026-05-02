function calculateSchedule(vehicles, maxHours) {
    // Sort by highest Impact per unit of Duration
    vehicles.sort((a, b) => (b.Impact / b.Duration) - (a.Impact / a.Duration));

    let totalTime = 0;
    let totalImpact = 0;
    let selected = [];

    for (let v of vehicles) {
        if (totalTime + v.Duration <= maxHours) {
            selected.push(v);
            totalTime += v.Duration;
            totalImpact += v.Impact;
        }
    }

    return {
        selected,
        totalImpact
    };
}

module.exports = {
    calculateSchedule
};
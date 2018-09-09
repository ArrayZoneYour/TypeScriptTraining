const data = [['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar']];
export function sensorAnalysis(sensorData: any[]) {
    const record: number[] = sensorData.map(x => x[1]);
    const mean: number = Number((record.reduce((a, b) => a + b, 0) / record.length).toFixed(4));
    const deviation = Math.sqrt(record.reduce((a, b) => a + (b - mean) ** 2, 0) / (sensorData.length - 1)).toFixed(4);
    return [Number(mean), Number(deviation)];
}
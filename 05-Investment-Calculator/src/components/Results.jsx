import { calculateInvestmentResults, formatter } from "../util/investment.js";

// Year Investment Value Interest (Year) Total Investment Interest Capital

export default function Results({ inputData }) {
	const resultData = calculateInvestmentResults(inputData); // inputData has the initialInvestment, annualInvestment, expectedReturn, and duration values

	console.log(resultData); // Debugging and understanding the data structure

	const initialInvestment =
		resultData[0].valueEndOfYear -
		resultData[0].interest -
		resultData[0].annualInvestment;

	return (
		<table id="result">
			<thead id="result-thead">
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Investment</th>
					<th>Interest Capital</th>
				</tr>
			</thead>
			<tbody id="result-tbody">
				{resultData.map((result, index) => {
					const totalInterest =
						result.valueEndOfYear -
						result.annualInvestment * result.year -
						initialInvestment;

					const totalAmountInvested = result.valueEndOfYear - totalInterest;

					return (
						<tr key={index}>
							<td>{result.year}</td>
							<td>{formatter.format(result.valueEndOfYear)}</td>
							<td>{formatter.format(result.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

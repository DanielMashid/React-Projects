import { calculateInvestmentResults } from "../util/investment.js";

// Year Investment Value Interest (Year) Total Investment Interest Capital

export default function Results({ inputData }) {
	const resultData = calculateInvestmentResults(inputData); // inputData has the initialInvestment, annualInvestment, expectedReturn, and duration values
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
				{resultData.map((result, index) => (
					<tr key={index}>
						<td>{result.year}</td>
						<td>{result.valueEndOfYear}</td>
						<td>{result.interest}</td>
						<td>{result.annualInvestment}</td>
						<td>{result.valueEndOfYear - result.annualInvestment}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

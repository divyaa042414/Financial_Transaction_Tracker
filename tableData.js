


<>
{
  <table>
    <tbody>
        TransactionDetails.map((data,index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.TransactionID}</td>
            <td>{data.CustomerName}</td>
            <td>{data.TransactionDate}</td>
            <td>{data.Amount}</td>
            <td>{data.Status}</td>
            <td>{data.InvoiceURL}</td>
        </tr>))
      </tbody>
    </table>
    }
</>
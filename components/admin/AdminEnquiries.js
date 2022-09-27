import { Table } from "react-bootstrap";

function AdminEnquiries({ enquiries }) {
  return (
    <div>
      <h2 className="pb-3">Enquiries</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Hotel</th>
            <th>From</th>
            <th>To</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {enquiries &&
            enquiries.data?.map((enquiry, i) => {
              return (
                <tr key={enquiry.id}>
                  <td>
                    <p>{enquiry.attributes.hotel}</p>
                  </td>

                  <td>
                    <p>{enquiry.attributes.from}</p>
                  </td>

                  <td>
                    <p>{enquiry.attributes.to}</p>
                  </td>

                  <td>
                    <p>{enquiry.attributes.name}</p>
                  </td>

                  <td>
                    <p>{enquiry.attributes.email}</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminEnquiries;

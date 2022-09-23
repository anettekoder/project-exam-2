import { useState } from "react";
import Moment from "react-moment";
import { Table } from "react-bootstrap";

function AdminEnquiries({ enquiries, hotelName }) {
  // const [selected, setSelected] = useState(null);

  // const toggle = (i) => {
  //   if (selected == i) {
  //     return setSelected(null);
  //   }

  //   setSelected(i);
  // };

  return (
    <>
      <div className="w-full font-heading border-b-2 border-black mb-5">
        <h2 className="text-2xl md:text-3xl xl:text-4xl xl:pb-2">Enquiries</h2>
      </div>

      <Table striped bordered hover>
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
                <tr key={enquiry.attributes.id}>
                  <td>{hotelName}</td>

                  <td>
                    <Moment format="DD/MM/YYYY">
                      {enquiry.attributes.from}
                    </Moment>
                  </td>

                  <td>
                    <Moment format="DD/MM/YYYY">{enquiry.attributes.to}</Moment>
                  </td>

                  <td>{enquiry.attributes.name}</td>

                  <td>{enquiry.attributes.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default AdminEnquiries;

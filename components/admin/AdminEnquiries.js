import { useState } from "react";
import Moment from "react-moment";
import { Table } from "react-bootstrap";

function AdminEnquiries({ enquiries }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="w-full font-heading border-b-2 border-black mb-5">
        <h2 className="text-2xl md:text-3xl xl:text-4xl xl:pb-2">Enquiries</h2>
      </div>

      <Table striped bordered hover>
        {/* <div className="flex md:table w-full"> */}
        <thead>
          <tr>
            {/* <th>Hotel</th> */}
            <th>From</th>
            <th>To</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tdbody>
          {enquiries &&
            enquiries.data?.map((enquiry, i) => {
              return (
                <tr
                  key={enquiry.attributes.id}
                  onClick={() => toggle(i)}
                  // className="flex flex-wrap justify-between items-center md:table-row bg-blue-600 odd:bg-blue-500 lg:hover:bg-blue-400"
                >
                  <td>{enquiry.attributes.hotel}</td>

                  <td>
                    <Moment
                      format="DD/MM/YYYY"
                      // className="md:table-cell text-center sm:text-left px-2 py-4 w-1/3 sm:w-1/4"
                    >
                      {enquiry.attributes.from}
                    </Moment>
                  </td>

                  <td>
                    <Moment
                      format="DD/MM/YYYY"
                      // className="md:table-cell px-2 py-4 w-1/3 sm:w-1/4"
                    >
                      {enquiry.to}
                    </Moment>
                  </td>

                  <td>{enquiry.attributes.name}</td>

                  <td>{enquiry.attributes.email}</td>

                  {/* <div
                        className={
                          selected == i
                            ? "w-full block md:hidden"
                            : "w-full hidden md:hidden"
                        }
                      >
                        <div className="w-11/12 h-0.5 bg-white mx-auto"></div>
                        <div>{enquiry.attributes.name}</div>
                        <div>{enquiry.attributes.email}</div>
                      </div> */}
                </tr>
              );
            })}
        </tdbody>

        {/* </div> */}
      </Table>
    </>
  );
}

export default AdminEnquiries;

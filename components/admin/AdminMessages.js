// import { useState } from "react";
import { Table } from "react-bootstrap";

function AdminMessages({ messages }) {
  return (
    <div>
      <h2 className="pb-3">Messages</h2>

      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages.data?.map((message, i) => {
              return (
                <tr key={message.id}>
                  <td>
                    <p className="text-admin-forms">
                      {message.attributes.name}
                    </p>
                  </td>
                  <td>
                    <p className="text-admin-forms">
                      {message.attributes.email}
                    </p>
                  </td>

                  <td>
                    <p className="text-admin-forms">
                      {message.attributes.message}
                    </p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminMessages;

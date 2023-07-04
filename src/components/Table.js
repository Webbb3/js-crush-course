import React from "react";
import MaterialTable from "material-table";

const Table = ({ columns, data, handleOpenAddModal }) => {
  return (
    <MaterialTable
      columns={columns}
      data={data}
      options={
        {
        search: true,
        searchFieldAlignment: "left",
        searchFieldVariant: "standard",
        paging: true,
        sorting: false,
        showFirstLastPageButtons: true,
        addRowPosition: "first",
        actionsColumnIndex: -1,
        rowStyle: 
          { background: "#cadefc", color: "#000000" },
        headerStyle: 
          { background: "#cca8e9", color: "#000000" },
      }
    }
      title="Cars"
      actions={[
        {
          icon: "add",
          tooltip: "Add Car",
          isFreeAction: true,
          onClick: handleOpenAddModal,
        },
      ]}
    />
  );
};

export default Table;

import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

const Kanban = () => {
  const kanbanData = [
    { Id: 'Task 1', Status: 'Open', Summary: 'Task 1 summary' },
    // Add more tasks here
  ];

  const kanbanColumns = [
    { headerText: 'To Do', keyField: 'Open' },
    // Add more columns here
  ];

  return (
    <div className="kanban">
      <KanbanComponent dataSource={kanbanData}>
        <ColumnsDirective>
          {kanbanColumns.map((col, index) => (
            <ColumnDirective key={index} {...col} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;

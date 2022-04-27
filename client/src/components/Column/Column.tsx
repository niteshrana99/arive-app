import classNames from "classnames";
import React, { useState } from "react"

type UserProps = {
  data: {
    name: string,
    id: string
}[],
header: React.ReactNode,
row: Function,
onRowClick?: Function
}

const Column = ( { data, header, row, onRowClick }: UserProps) => {

  const [activeId, setActiveId] = useState<string>();

  const onClick = (event: React.MouseEvent) => {
    const { id } = (event.target as HTMLDataListElement).dataset;
    onRowClick && onRowClick(id);
    setActiveId(id);
  }
  return (
    <div className='users'>
        <ul className="users_list">
          <li className="users_list_item users_list_control">
            {header}
          </li>
          {
            data.map((item) => {
              return (
                <li className={classNames("users_list_item", {'users_list_item_active': item.id === activeId})} data-id={item.id}  key={item.id} onClick={onClick}>
                  {
                    row(item)
                  }
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Column;
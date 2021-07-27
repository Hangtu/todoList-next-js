import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.scss';
import { useTodoListContext } from '../../context';
import { convertDateToString } from '../../utils';

function TodoListItem({ item }) {
    const { updateStatus } = useTodoListContext();
    const rowColor = (item?.status?.type).toLowerCase();
    return (
        <div
            className={`row ${styles['item-row']} ${styles[rowColor]}`}
            data-testid="list-element"
        >
            <div className="col d-flex justify-content-center text-capitalize fw-bold ">
                {item?.description}
            </div>
            <div className="col d-flex justify-content-center text-uppercase fw-bold d-none d-lg-flex">
                {item?.status.type}
            </div>
            <div className="col d-flex justify-content-center fw-bold ">
                {convertDateToString(item?.dueDate)}
            </div>
            <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={item?.isComplete}
                        onChange={(e) => updateStatus(e, item)}
                        aria-label="checkbox"
                    />
                </div>
            </div>
        </div>
    );
}

TodoListItem.propTypes = {
    item: PropTypes.shape({
        description: PropTypes.string.isRequired,
        status: PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string
        }),
        dueDate: PropTypes.string,
        isComplete: PropTypes.bool
    }).isRequired
};

export default TodoListItem;

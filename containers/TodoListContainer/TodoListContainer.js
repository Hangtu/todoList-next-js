import React from 'react';
import { Spinner } from 'react-bootstrap';
import { TodoListItem } from '../../components';
import { useTodoListContext } from '../../context';
import style from './TodoListContainer.module.scss';

function TodoListContainer() {
    const { itemsState } = useTodoListContext();
    return (
        <>
            <div className={style.container}>
                <div className={`row ${style.header}`}>
                    <div className="col d-flex justify-content-center fw-bold ">
                        Task
                    </div>
                    <div className="col d-flex justify-content-center fw-bold d-none d-lg-flex">
                        Status
                    </div>
                    <div className="col d-flex justify-content-center fw-bold ">
                        Date
                    </div>
                    <div className="col d-flex justify-content-center fw-bold d-flex justify-content-center">
                        Option
                    </div>
                </div>
                {itemsState.length ? (
                    itemsState.map((item) => (
                        <TodoListItem key={item?.id} item={item} />
                    ))
                ) : (
                    <div className={style.spinner}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
            </div>
        </>
    );
}

export default TodoListContainer;

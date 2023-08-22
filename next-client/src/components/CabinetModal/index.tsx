import React from 'react'
import './CabinetModal.module.scss'
import {Modal, Text} from "@nextui-org/react";
import {CabinetElement, CabinetInfo} from "../../shared/types/cabinet";
import CabinetModalItem from "../CabinetModalItem";

interface Props {
    visible: boolean
    closeHandler: () => void
    data: CabinetInfo
}

function CabinetModal({visible, closeHandler, data}: Props) {
    let currentDate = new Date().toLocaleString("ek-UA", {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width={'900px'}
        >
            <Modal.Header>
                <Text className={'cursor-auto'}>
                    Розклад: {currentDate}
                </Text>
            </Modal.Header>
            <Modal.Body>
                <div className={'cursor-auto'}>
                    {data && data.length > 0
                        ? data.map((item: CabinetElement, index: number) =>
                            <CabinetModalItem key={index} {...item}/>
                        )
                        : <div className='text-xl text-center pb-10'>
                                Пари відсутні!
                        </div>

                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CabinetModal


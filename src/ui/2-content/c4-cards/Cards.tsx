import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {addCardTC, CardsType, deleteCardTC, getCardsTC} from "../../../redux/reducers/cards-reducer";
import React, {ChangeEvent, useEffect, useState} from "react";


type CardsPropsType = {
    id: string
}

export const Cards = (props: CardsPropsType) => {

        const [showInput, setShowInput] = useState<boolean>(false)
        const [cardTitle, setCardTitle] = useState<string>('')

        const dispatch = useDispatch()
        const cards = useSelector<RootStateType, CardsType>(state => state.cards)

        useEffect(() => {
            dispatch(getCardsTC(props.id))
        }, [dispatch, props.id])

        const cardsForColumn = cards[props.id]

        const onClickShowInput = () => {
            setShowInput(true)
        }

        const changeCardTitle = (e: ChangeEvent<HTMLInputElement>) => {
            setCardTitle(e.currentTarget.value)
        }

        const addCard = () => {
            dispatch(addCardTC(cardTitle, props.id))
            setCardTitle('')
            setShowInput(false)
        }

        const deleteCard = (cardId: string) => {
            dispatch(deleteCardTC(cardId, props.id))
        }

        return (
            <div className={'cards'}>
                {cardsForColumn && cardsForColumn.map((card) =>
                    <div key={card._id} className={'card'}>{card.title}
                        <button onClick={() => deleteCard(card._id)}>X</button>
                    </div>
                )}
                <button onClick={onClickShowInput}>add card</button>
                {showInput && <div>
                    <input value={cardTitle} onChange={changeCardTitle}/>
                    <button onClick={addCard}>ok</button>
                </div>
                }
            </div>
        );
    }
;
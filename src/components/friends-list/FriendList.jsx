import React from 'react';
import { StyledList } from './FriendsList.styled';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => { 
    return (
       
              friends.map(({ id, isOnline, avatar, name }) => { 
            return (
                 <>
                <StyledList>
                    <FriendListItem
                        key={id} name={name} avatar={avatar} isOnline={ isOnline}
                        />
                         </StyledList>
                    </>
                  
            )

              })
        
         
   )
 

}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
   avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    })
 
    )


}


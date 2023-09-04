import React from 'react';

type Props={
    UnformattedDate: string
}
export const DateFormatter: React.FC<Props> = ({ UnformattedDate }) => {
    const date = new Date(UnformattedDate);
    const year = date.getFullYear(); // 年
    const month = date.getMonth() + 1; // 月 (0から始まるため、+1する)
    const day = date.getDate(); // 日
    const FormattedDate = `${year}年${month}月${day}日`;
    return(
        <>{FormattedDate}</>
    )
}
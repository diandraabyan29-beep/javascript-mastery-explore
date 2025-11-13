export const point_Maksimal = 1000
export const point_bonus = 50

export default function hitungTotalPoint(nilaiArray){
    const total = nilaiArray.reduce((total,nilai) => total + nilai,0)

    return total > point_Maksimal ? point_Maksimal :total
}


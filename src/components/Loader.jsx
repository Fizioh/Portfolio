import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontSize: 19, color: '#f1f1f1', fontWeight: 600, marginTop: 40 }}>
          Chargement
        </span>
        <span style={{ fontSize: 19, color: '#f1f1f1', fontWeight: 600, marginTop: 40, marginLeft: 5 }}>
          {progress.toFixed(2)} 
        </span>
        <span style={{ fontSize: 19, color: '#f1f1f1', fontWeight: 600, marginTop: 40, marginLeft: 5 }}>
          %
        </span>
      </div>
    </Html>
  )
}

export default Loader
import styles from './template.module.css';
export interface IBaseTemplate {
  sampleText: string;
}

const TemplateComponent: React.FC<IBaseTemplate> = ({ sampleText }) => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>{sampleText}</p>
    </div>
  );
};

export default TemplateComponent;

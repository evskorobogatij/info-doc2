interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => (
  <div className="break-inside-avoid card bg-base-100 shadow-md mb-8 border hover:border-blue-600 hover:shadow-blue-500">
    <div className="card-body">
      <p>{title}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-link text-blue-600">Читать →</button>
      </div>
    </div>
  </div>
)

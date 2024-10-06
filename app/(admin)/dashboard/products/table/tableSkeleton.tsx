import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
  return (
    <div className="border rounded-lg w-full h-[60vh] overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4">
                <Skeleton className="h-4 w-[100px]" />
              </th>
              <th className="p-4">
                <Skeleton className="h-4 w-[150px]" />
              </th>
              <th className="p-4">
                <Skeleton className="h-4 w-[100px]" />
              </th>
              <th className="p-4">
                <Skeleton className="h-4 w-[120px]" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <Skeleton className="h-4 w-[100px]" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-4 w-[150px]" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-4 w-[100px]" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-4 w-[120px]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

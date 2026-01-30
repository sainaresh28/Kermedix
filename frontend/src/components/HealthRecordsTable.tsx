import { useState } from 'react';
import { HealthRecord } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download } from 'lucide-react';

interface HealthRecordsTableProps {
  records: HealthRecord[];
  onRecordClick?: (record: HealthRecord) => void;
  showActions?: boolean;
}

const HealthRecordsTable = ({ records, onRecordClick, showActions = true }: HealthRecordsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDoctor, setFilterDoctor] = useState('');

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.workerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterDoctor || record.doctor.includes(filterDoctor);
    return matchesSearch && matchesFilter;
  });

  const uniqueDoctors = [...new Set(records.map(record => record.doctor))];

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, worker ID, or diagnosis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <select
          value={filterDoctor}
          onChange={(e) => setFilterDoctor(e.target.value)}
          className="px-3 py-2 border border-input rounded-sm bg-background"
        >
          <option value="">All Doctors</option>
          {uniqueDoctors.map(doctor => (
            <option key={doctor} value={doctor}>{doctor}</option>
          ))}
        </select>

        {showActions && (
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="healthcare-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Patient</th>
                <th>Worker ID</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr 
                  key={record.id}
                  className={onRecordClick ? "cursor-pointer hover:bg-muted" : ""}
                  onClick={() => onRecordClick?.(record)}
                >
                  <td className="font-medium">{record.date}</td>
                  <td>{record.patientName}</td>
                  <td className="font-mono text-sm">{record.workerId}</td>
                  <td>{record.doctor}</td>
                  <td>{record.diagnosis}</td>
                  <td className="max-w-xs">
                    <span className="text-sm truncate block">{record.prescription}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRecords.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No health records found matching your criteria.
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredRecords.length} of {records.length} records
      </p>
    </div>
  );
};

export default HealthRecordsTable;
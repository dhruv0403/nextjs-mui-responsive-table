"use client";
import React, { useState } from 'react';
import {
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  TextField, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  Checkbox, 
  IconButton, 
  TablePagination
} from '@mui/material';
import { 
    Add, 
    Search, 
    FilterList, 
    Edit, 
    Delete, 
    MoreVert 
} from '@mui/icons-material';

const DataTable = () => {
  const data = [
    {
      id: 1,
      status: 'Paid',
      client: { name: 'John Doe', email: 'john@example.com', avatar: '/public/assets/imgs/image.png' },
      total: '$1000',
      issueDate: '2024-10-01',
      balance: '$0',
    },
    {
      id: 2,
      status: 'Pending',
      client: { name: 'Jane Smith', email: 'jane@example.com', avatar: '/avatars/jane.jpg' },
      total: '$500',
      issueDate: '2024-10-03',
      balance: '$500',
    },
    {
      id: 3,
      status: 'Overdue',
      client: { name: 'Alex Johnson', email: 'alex@example.com', avatar: '/avatars/alex.jpg' },
      total: '$750',
      issueDate: '2024-09-15',
      balance: '$750',
    },
    {
      id: 4,
      status: 'Paid',
      client: { name: 'Emma Brown', email: 'emma@example.com', avatar: '/avatars/emma.jpg' },
      total: '$1200',
      issueDate: '2024-10-05',
      balance: '$0',
    },
    {
      id: 5,
      status: 'Pending',
      client: { name: 'Liam Davis', email: 'liam@example.com', avatar: '/avatars/liam.jpg' },
      total: '$650',
      issueDate: '2024-10-06',
      balance: '$650',
    },
    {
      id: 6,
      status: 'Paid',
      client: { name: 'Olivia Wilson', email: 'olivia@example.com', avatar: '/avatars/olivia.jpg' },
      total: '$900',
      issueDate: '2024-09-28',
      balance: '$0',
    },
    {
      id: 7,
      status: 'Overdue',
      client: { name: 'Noah Miller', email: 'noah@example.com', avatar: '/avatars/noah.jpg' },
      total: '$450',
      issueDate: '2024-09-10',
      balance: '$450',
    },
    {
      id: 8,
      status: 'Pending',
      client: { name: 'Ava Taylor', email: 'ava@example.com', avatar: '/avatars/ava.jpg' },
      total: '$300',
      issueDate: '2024-10-07',
      balance: '$300',
    },
    {
      id: 9,
      status: 'Paid',
      client: { name: 'William Anderson', email: 'william@example.com', avatar: '/avatars/william.jpg' },
      total: '$1100',
      issueDate: '2024-10-02',
      balance: '$0',
    },
    {
      id: 10,
      status: 'Overdue',
      client: { name: 'Sophia Thomas', email: 'sophia@example.com', avatar: '/avatars/sophia.jpg' },
      total: '$850',
      issueDate: '2024-09-20',
      balance: '$850',
    },
  ];

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [status, setStatus] = useState(''); // State for the selected status filter
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter data based on status and search term
  const filteredData = data.filter((row) => {
    const statusMatch = status ? row.status.toLowerCase() === status.toLowerCase() : true;
    const searchMatch = row.client.name.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatch && searchMatch;
  });

  

  return (
    <Paper>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
        <div>
          <Button variant="contained" color="primary" startIcon={<Add />}>
            Create Invoice
          </Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            InputProps={{
              endAdornment: <Search />
            }}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="filter-label">Status</InputLabel>
            <Select
              labelId="filter-label"
              id="filter"
              value={status}
              onChange={(e) => setStatus(e.target.value)} // Update selected status
              label="Status"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Overdue">Overdue</MenuItem>
            </Select>
          </FormControl>
       
        </div>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Issue Date</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell style={{ color: 'blue' }}>#{row.id}</TableCell>
                <TableCell>
                  <span style={{ color: row.status === 'Paid' ? 'green' : row.status === 'Pending' ? 'orange' : 'red' }}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.client.avatar} alt={row.client.name} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }} />
                    <div>
                      <div>{row.client.name}</div>
                      <div style={{ color: 'gray' }}>{row.client.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.issueDate}</TableCell>
                <TableCell>
                  <span style={{ color: row.balance === '$0' ? 'green' : 'red' }}>
                    {row.balance}
                  </span>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary">
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
        component="div"
        count={data.length} // Total number of rows
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;

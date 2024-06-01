const convertInputDateToIsoString = (dateInput) => {
  const result = new Date(dateInput).toISOString();
  return result;
};
const formatDateFromIsoString = (isoString) => {
  // Membuat objek Date dari string input
  const date = new Date(isoString);

  // Mendefinisikan nama-nama bulan
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Mendapatkan hari, bulan, dan tahun dari objek Date
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Menggabungkan hasil dalam format yang diinginkan
  return `${day} ${month} ${year}`;
};
const formatToDateInput = (isoString) => {
  // Membuat objek Date dari string input
  const date = new Date(isoString);

  // Mendapatkan tahun, bulan, dan hari dari objek Date
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // UTCMonth is zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");

  // Menggabungkan hasil dalam format yang diinginkan
  return `${year}-${month}-${day}`;
};
export {
  convertInputDateToIsoString,
  formatDateFromIsoString,
  formatToDateInput,
};

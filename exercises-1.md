# Exercises 1

## NEWTON SECOND LAW

### [Algoritma]

  1. Simpan `massa` dengan nilai 600
  2. Simpan `percepatan` dengan nilai 2m/s2
  3. Simpan `gaya` tanpa nilai, `gaya` akan kita isi nanti
  4. Hitung gaya dengan rumus sebagai berikut:
     - `massa` dikali `percepatan`
  5. Kemudian simpan hasil perkalian ke `gaya`
  6. Tampilkan nilai `gaya`

### [PseudoCode]

  1. STORE `massa` with 600
  2. STORE `percepatan` with 2m/s2
  3. STORE `gaya` without any value
  4. CALCULATE `massa` * `percepatan`
  5. SET `gaya` with calculation result
  6. DISPLAY `gaya`

## TAHUN KABISAT

### [Algoritma]

  1. Simpan `tahun` dengan nilai tahun sekarang (contoh: 2018)
  2. Simpan `sisa` tanpa nilai, `sisa` akan kita isi dengan nilai sisa hasil pembagian  
  3. Hitung `tahun` dibagi 4 dan dapatkan sisa pembagian nya.
     3.a Jika sisa pembagian sama dengan 0 maka tampilkan 'Tahun Kabisat'

### [PseudoCode]


## LAUNDRY DAY

### [Algoritma]

  1. Simpan `total` dengan nilai 20
  2. Simpan `pakaian` dengan nilai 0
  3. SELAMA `pakaian` KURANG DARI atau SAMA DENGAN `total`, LAKUKAN:
     - Masukan pakaian ke dalam mesin cuci
     - `pakaian` ditambah 1
  4. Tampilkan 'Total pakaian sudah 20'

### [PseudoCode]

  1. STORE `total` with any number value (example: 20)
  2. STORE `pakaian` with 0 value
  3. WHILE `pakaian` LESS THAN `total` DO
     - SET `pakaian` = `pakaian` + 1

     END WHILE

  4. DISPLAY 'Total pakaian sudah 20'

## PERIKSA KUKU

### [Algoritma]

  1. Simpan `jumlah` dengan nilai 40
  2. Simpan `siswake` dengan nilai 0
  3. SELAMA `siswake` KURANG DARI atau SAMA DENGAN `jumlah` LAKUKAN:
     - Jika Siswa ke `siswake` kuku nya panjang maka

           BERIKAN HUKUMAN
           `siswake` ditambah 1
           Kembali ke langkah No.3

     - Jika tidak maka

           `siswake` ditambah 1
           Kembali ke langkah No.3

### [PseudoCode]

  STORE `jumlah` with any number value (example: 40)

  STORE `siswake` with 0

  WHILE `siswake` LESS THAN `jumlah` DO

    IF `siswake` == KUKU NYA PANJANG

      BERIKAN HUKUMAN
      SET `siswake` = `siswake` + 1

    ELSE

      SET `siswake` = `siswake` + 1

  ENDWHILE
